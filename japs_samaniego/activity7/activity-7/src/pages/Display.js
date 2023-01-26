import DisplayCard from '../components/DisplayCard';
import CardNumber from '../components/CardNumber';
import '../sampleTest.css';

function Display() {
    return (
        <div className='row p-1'>
            <div className='col-6'>
                <DisplayCard CardTitle='Regular' />
                <DisplayCard CardTitle='Regular' />
                <CardNumber CardTitle='This is your Queue' CardText1='Please wait on your queue and proceed to your designated counter' QueueNumber='001' CardText2='Thank you for using Queueing System' />
            </div>
            <div className='col-2'>
                <DisplayCard CardTitle='COUNTER 1' />
                <CardNumber CardTitle='Now Serving' CardText1='Please proceed to the counter' QueueNumber='001' />
                <DisplayCard CardTitle='NEXT' />
                <DisplayCard CardTitle='Total Served:' />
            </div>
            <div className='col-2'>
                <DisplayCard CardTitle='COUNTER 2' />
                <CardNumber CardTitle='Now Serving' CardText1='Please proceed to the counter' QueueNumber='002' />
                <DisplayCard CardTitle='NEXT' />
                <DisplayCard CardTitle='Total Served:' />
            </div>
            <div className='col-2'>
                <DisplayCard CardTitle='SENIOR/PWD' />
                <CardNumber CardTitle='Now Serving' CardText1='Please proceed to the counter' QueueNumber='003' />
                <DisplayCard CardTitle='NEXT' />
                <DisplayCard CardTitle='Total Served:' />
            </div>
        </div>
    );
};

export default Display;