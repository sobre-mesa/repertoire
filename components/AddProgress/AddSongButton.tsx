import { PlusIcon } from "../Shared/Icons/PlusIcon";

const AddSongButton: React.FC = () => {
    return (
        <button
            onClick={()=>{}}
            className="flex items-center justify-center p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
            <PlusIcon />
        </button>
    );
};
