"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(id, nombre, apellido, edad, email, sexo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.sexo = sexo;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () { return this.nombre; },
        // Setters & Getters
        set: function (e) { this.nombre = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () { return this.apellido; },
        set: function (e) { this.apellido = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () { return this.edad; },
        set: function (e) { this.edad = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Persona.prototype, "Email", {
        get: function () { return this.email; },
        set: function (e) { this.email = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Persona.prototype, "Sexo", {
        get: function () { return this.sexo; },
        set: function (e) { this.sexo = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Persona.prototype, "Id", {
        get: function () { return this.id; },
        set: function (e) { this.id = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Persona;
}());
var tipoLegislador;
(function (tipoLegislador) {
    tipoLegislador[tipoLegislador["Diputado"] = 0] = "Diputado";
    tipoLegislador[tipoLegislador["Senador"] = 1] = "Senador";
})(tipoLegislador || (tipoLegislador = {}));
/// <reference path="persona.ts" />
var Legislador = /** @class */ (function (_super) {
    __extends(Legislador, _super);
    function Legislador(id, nombre, apellido, edad, email, sexo, tipo) {
        var _this = _super.call(this, id, nombre, apellido, edad, email, sexo) || this;
        _this.tipo = tipo;
        return _this;
    }
    Object.defineProperty(Legislador.prototype, "TipoLegislador", {
        get: function () { return this.tipo; },
        set: function (e) { this.tipo = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Legislador;
}(Persona));
//# sourceMappingURL=outPut.js.map