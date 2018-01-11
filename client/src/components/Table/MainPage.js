import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { SetSeatModal } from '../Modals/SetSeatModal';
import tables from './tables.json';

const green = '#59f442';
// const red = '#f44141';

export class MainPage extends React.Component {

          state = {
            tables: tables,
            seatColor: green,
            modalToggle: false
        };

    
// handleColorChange = event =>{
//     console.log(event.target);
//     const colorChange = this.state.seatColor === green ? red : green;
//     this.setState({seatColor: colorChange});
// };

     handleTableClick(e) {
        e.preventDefault();
        const modalAction = !this.state.modalToggle;
 console.log("modalAction ", modalAction);
        // const seatCheck = this.state.isOccupied ? false : true;


        this.setState({
            modalToggle: modalAction
        });
        
    }

    render() {
        
const tableDisplay = this.state.tables.map(table => (
    <a key={table.name} onClick={this.handleTableClick.bind(this)}
    isOccupied={table.isOccupied} modalOpen={true}
    >
        <Button style={{background: this.state.seatColor}}>
            {table.name}
        </Button>
    </a>
))
        return (
            
            <div>
                    <div className='show-grid'>
                    {this.state.modalToggle ? <SetSeatModal/> : ""}
                        <Col md={6} lg={8} mdOffset={2}>
                            {tableDisplay}
                        </Col>
                    </div>
            </div>
        );
    }
}
export default MainPage;