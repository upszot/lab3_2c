"use strict";
var anuncios = /** @class */ (function () {
    function anuncios(titulo, transaccion, descripcion, precio, num_wc, num_esta, num_dormi, id) {
        this._titulo = titulo;
        this._precio = precio;
        this._descripcion = descripcion;
        this._transaccion = transaccion;
        if (id != null) {
            this._id = id;
        }
        this._num_dormitorio = num_dormi;
        this._num_wc = num_wc;
        this._num_estacionamiento = num_esta;
    }
    Object.defineProperty(anuncios.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anuncios.prototype, "num_wc", {
        get: function () {
            return this._num_wc;
        },
        set: function (value) {
            this._num_wc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anuncios.prototype, "num_estacionamiento", {
        get: function () {
            return this._num_estacionamiento;
        },
        set: function (value) {
            this._num_estacionamiento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anuncios.prototype, "num_dormitorio", {
        get: function () {
            return this._num_dormitorio;
        },
        set: function (value) {
            this._num_dormitorio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anuncios.prototype, "transaccion", {
        get: function () {
            return this._transaccion;
        },
        set: function (value) {
            this._transaccion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anuncios.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anuncios.prototype, "descripcion", {
        get: function () {
            return this._descripcion;
        },
        set: function (value) {
            this._descripcion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anuncios.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (value) {
            this._precio = value;
        },
        enumerable: true,
        configurable: true
    });
    anuncios.prototype.devuelveAtributos = function () {
        var atributos = { id: "", titulo: "", transaccion: "", descripcion: "", precio: "", num_wc: "", num_estacionamiento: "", num_dormitorios: "" };
        return atributos;
    };
    return anuncios;
}());
