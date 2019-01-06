import * as React from 'react';
import { callApi } from '../utils/clientUtils'

export class Add extends React.Component {
    public state = {
        result: '',
        value1: '',
        value2: '12',
        type: 'sum'

    };
    public componentDidMount() {
        ;
    };

    public handleSubmit = (e: any) => {
        e.preventDefault();
        // console.log(this.state)
        callApi<{ result: string }>('/api/op?type='+this.state.type+'&value1=' + this.state.value1 + '&value2=' + this.state.value2)
            .then(res => this.setState({ result: res.result })).catch(err => console.log(err));
    }

    public value1Changed = (e: any) => {
        this.setState({ value1: e.target.value })
    }

    public value2Changed = (e: any) => {
        this.setState({ value2: e.target.value })
    }

    public typeChanged = (e: any) => {
        console.log("TYPE="+e.target.value)
        this.setState({ type: e.target.value })
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <strong>Post to Server:</strong>
                    </p>
                    <input
                        type="text"
                        id="value1"
                        value={this.state.value1}
                        onChange={this.value1Changed}
                    />

                    <input
                        type="text"
                        id="value2"
                        value={this.state.value2}
                        onChange={this.value2Changed}
                    />

                    <select id="type"
                        value={this.state.type}
                        onChange={this.typeChanged}>
                        <option value="sum">SUM</option>
                        <option value="diff">DIFF</option>
                        <option value="mul">MUL</option>
                        <option value="div">DIV</option>
                        <option value="mod">MOD</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
                <br />
                The sum is <b><label>{this.state.result}</label></b>
            </div>

        )
    }
}
