import Button from '@mui/material/Button';
export default function DailyUpdate(){
    return(
        <div className="w-full flex flex-col text-white">
            <h3 className="text-lg">Daily Updates</h3>
            <p className="text-sm text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
            <Button variant="contained" className="bg-gradient-to-t from-blue-800 to-blue w-3/4 mt-2 bg-primary w-full">Message</Button>
        </div>
    )
}