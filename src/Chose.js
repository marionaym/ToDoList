// une chose
export default class Chose {
    constructor (id, texte, fait = false) {
    this._id = id;
    this._texte = texte;
    this._fait = fait;
    }
    get id() {
    return this._id
    }
    get texte() {
    return this._texte;
    }

    get fait() {
    return this._fait
    }
    // modifier fait / pas fait
    faire() {
    this._fait = !this._fait;
    }
    // modifier le texte
    set texte(texte) {
    this._texte = texte;
    }
    pourAfficher() {
    return `--> ${this._texte} (${ this._fait ? "fait" : "à faire"})`;
    }
   }