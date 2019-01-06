import { Request, Response } from 'express';
import { MathUtils } from '../../utils/math-utils'

export class Routes {
    private utils = new MathUtils();
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Get request succes1full'

                })
            })

        app.route('/api/op')
            .get((req: Request, res: Response) => {
                let operation = req.query.type;
                let result: string = undefined;

                let value1: number = Number(req.query.value1);
                let value2: number = Number(req.query.value2);

                console.log(value1+" "+value2);
                if (Number.isNaN(value1) || Number.isNaN(value2)) {
                    result = "Invalid operatnds!";
                } else {

                    switch (operation) {
                        case "sum":
                            result = this.utils.sum(value1, value2) + "";
                            break;
                        case "diff":
                            result = this.utils.diff(value1, value2) + "";
                            break;
                        case "mul":
                            result = this.utils.multiply(value1, value2) + "";
                            break;
                        case "div":
                            result = this.utils.div(value1, value2) + "";
                            break;
                        case "mod":
                            result = this.utils.modulo(value1, value2) + "";
                            break;
                        default:
                            result = "invalid operation!(sum, diff, mul,div, mod) supported!!";
                    }
                }


                res.send({ result: result });
            })

        app.route('/api/temp')
            .get((req: Request, res: Response) => {
                let temp = Math.random() * 200;
                res.send({ temp: temp });
            });

    }
}