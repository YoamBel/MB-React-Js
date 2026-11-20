import test from 'node:test';
import assert from 'node:assert/strict';
import {CART_KEY,readCart,addItem,updateItem,removeItem,updateDetails,clearIfUnchanged} from '../src/local/cart-store.js';
class Storage { constructor(){this.data=new Map([['unrelated','not JSON']]);}getItem(key){return this.data.has(key)?this.data.get(key):null;}setItem(key,value){this.data.set(key,value);} }
test('cart survives reopening, combines quantities and preserves unrelated storage',()=>{
 const storage=new Storage();addItem(1,storage);addItem(1,storage);addItem(2,storage);
 updateItem(1,{note:'Taille 52',quantity:3},storage);updateDetails({clientLabel:'Client test',note:'Brouillon'},storage);
 const cart=readCart(storage);assert.equal(cart.items.length,2);assert.equal(cart.items[0].quantity,3);assert.equal(cart.items[0].note,'Taille 52');assert.equal(cart.clientLabel,'Client test');
 removeItem(2,storage);assert.deepEqual(readCart(storage).items.map(item=>item.articleId),[1]);assert.equal(storage.getItem('unrelated'),'not JSON');
});
test('invalid quantities and corrupt saved data do not overwrite the previous draft',()=>{
 const storage=new Storage();addItem(1,storage);const original=storage.getItem(CART_KEY);
 for(const quantity of [0,-1,1.5,1000,NaN]){assert.throws(()=>updateItem(1,{quantity},storage));assert.equal(storage.getItem(CART_KEY),original);}
 storage.setItem(CART_KEY,'corrupt');assert.throws(()=>addItem(2,storage));assert.equal(storage.getItem(CART_KEY),'corrupt');
});
test('storage errors retain the last valid data',()=>{
 const storage=new Storage();addItem(1,storage);const original=storage.getItem(CART_KEY);storage.setItem=()=>{throw Error('Quota');};
 assert.throws(()=>addItem(2,storage),/sauvegarder/);assert.equal(storage.getItem(CART_KEY),original);
});
test('a slow confirmation cannot clear a draft changed in another tab',()=>{
 const storage=new Storage();const sent=addItem(1,storage);addItem(2,storage);
 assert.equal(clearIfUnchanged(sent.requestId,storage),false);assert.equal(readCart(storage).items.length,2);
 const current=readCart(storage);assert.equal(clearIfUnchanged(current.requestId,storage),true);assert.equal(readCart(storage).items.length,0);
});
test('line count and quantity limits are enforced without losing the cart',()=>{
 const storage=new Storage();for(let id=1;id<=50;id++)addItem(id,storage);assert.throws(()=>addItem(51,storage),/50/);assert.equal(readCart(storage).items.length,50);
 updateItem(1,{quantity:999},storage);assert.throws(()=>addItem(1,storage),/999/);assert.equal(readCart(storage).items[0].quantity,999);
});
