export class MathUtils {
    public fibonacci(n: number): number {
        if (n <= 0)
            return 0;
        if (n == 1 || n == 2) {
            return 1;
        }
        else
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }

    public sum(...values:number[]):number{
        let sum=0;
        values.map(value=>sum+=value);
        return sum;
    }

    public diff(value1: number, value2:number ){
        return value1-value2;
    }

    public multiply(...values:number[]):number{
        let mul=values.reduce((a,b)=>a*b,1)
        return mul;
    }

    public div(value1: number, value2: number){
        return value1/value2;
    }

    public modulo(value1:number, value2:number){
        return value1%value2;
    }
}

const utils:MathUtils=new MathUtils();
console.log(utils.multiply(1,2,3));

