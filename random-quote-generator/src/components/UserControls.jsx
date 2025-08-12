import UserControlBtn from "./UserControlBtn";

import { HiOutlineSpeakerWave, HiOutlineShare } from "react-icons/hi2";

const UserControls = ({ onReadAloud, onShareQuote }) => {
  return (
    <div className="control-btns">
      <UserControlBtn onClick={onReadAloud}>
        <HiOutlineSpeakerWave />
      </UserControlBtn>

      <UserControlBtn onClick={onShareQuote}>
        <HiOutlineShare />
      </UserControlBtn>
    </div>
  );
};

export default UserControls;
