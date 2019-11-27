

class anuncios{

    private _id: number;
    private _precio:string;
    private _transaccion: string;
    private _descripcion: string;
    private _num_wc: number;
    private _num_dormitorio: number;
    private _num_estacionamiento: number;
    private _titulo: string;

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get num_wc(): number {
        return this._num_wc;
    }
    public set num_wc(value: number) {
        this._num_wc = value;
    }
    public get num_estacionamiento(): number {
        return this._num_estacionamiento;
    }
    public set num_estacionamiento(value: number) {
        this._num_estacionamiento = value;
    }
    public get num_dormitorio(): number {
        return this._num_dormitorio;
    }
    public set num_dormitorio(value: number) {
        this._num_dormitorio = value;
    }


    public get transaccion(): string {
        return this._transaccion;
    }
    public set transaccion(value: string) {
        this._transaccion = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    public get precio(): string {
        return this._precio;
    }
    public set precio(value: string) {
        this._precio = value;
    }

    constructor (titulo:string,transaccion:string,descripcion:string,precio:string,num_wc:number,num_esta:number,num_dormi:number,id?:number){
        this._titulo=titulo;
        this._precio=precio;
        this._descripcion=descripcion;
        this._transaccion=transaccion;
        if(id!=null){
            this._id=id;
        }
        this._num_dormitorio=num_dormi;
        this._num_wc=num_wc;
        this._num_estacionamiento=num_esta;
    }

    public  devuelveAtributos(){
        
        let atributos={id:"",titulo:"",transaccion:"",descripcion:"",precio:"",num_wc:"",num_estacionamiento:"",num_dormitorios:""}
        return atributos;
    }
    
}