import CustomModal from "../ui/Modal";

const JoinWaitlist = ({
  openModal,
  onClose,
}: {
  openModal: boolean;
  onClose: () => void;
}) => {
  return (
    <CustomModal isOpen={openModal} onClose={onClose} hideButton>
      <div className="joinWaitlist">
        <h3>Join Our Waitlist!</h3>
        <p>Become part of our early adoptors by filling the form below.</p>
        <div className="joinWaitlist__input">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div className="joinWaitlist__input">
          <label>First Name</label>
          <input type="text" placeholder="Enter First Name" name="firstName" />
        </div>
        <div className="joinWaitlist__input">
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last Name" name="lastName" />
        </div>
        <div className="joinWaitlist__input">
          <label>Organization Name</label>
          <input
            type="text"
            placeholder="Enter Organization Name"
            name="organizationName"
          />
        </div>
        <button className="button button-secondary">Submit</button>
      </div>
    </CustomModal>
  );
};

export default JoinWaitlist;
