import Button from '@mui/material/Button';

export default function AuthComponent() {
  return (
    <div className="bg-opacity-30 bg-white px-5 py-10 rounded-xl text-center w-max-100">
      <h3 className="font-medium text-2xl text-white">
        Collabration Through Conversation
      </h3>
      <div className="flex justify-center">
        <a className="btn btn-secondary btn-xl w-full" href="/signup">
        <Button variant="contained" className="w-3/4 mt-10 bg-primary">Sign Up</Button>
        </a>
      </div>
      <div className="flex justify-center">
        <a className="btn btn-secondary btn-xl w-full" href="/signin">
        <Button variant="contained" className="w-3/4 mt-10 bg-primary">Log In</Button>
        </a>
      </div>
    </div>
  );
}
