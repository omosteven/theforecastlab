import { useState } from "react";
import CustomModal from "../ui/Modal";
import API from "../../api/API";
import { getErrorMessage } from "../../utils/helper";

const FORM = "FORM";
const SUCCESS = "SUCCESS";

const JoinWaitlist = ({
  openModal,
  onClose,
}: {
  openModal: boolean;
  onClose: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    organization: "",
  });

  const updateForm = (event: any) => {
    const { value, name } = event?.target || {};
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitForm = () => {
    setLoading(true);
    setErrorMessage("");
    API({
      method: "POST",
      url: "/thirdparty/join",
      data: form,
    })
      .then((resp) => {
        setStage(SUCCESS);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(getErrorMessage(err));
        setLoading(false);
      });
  };

  const [stage, setStage] = useState(FORM);
  const renderBasedOnStage = () => {
    switch (stage) {
      case FORM:
        return (
          <form
            className="joinWaitlist"
            onSubmit={(e) => {
              e?.preventDefault();
              submitForm();
            }}
          >
            <h3>Join Our Waitlist!</h3>
            <p>Become part of our early adoptors by filling the form below.</p>
            <div className="joinWaitlist__input">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={updateForm}
                required
              />
            </div>
            <div className="joinWaitlist__input">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                onChange={updateForm}
                required
              />
            </div>
            <div className="joinWaitlist__input">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                onChange={updateForm}
                required
              />
            </div>
            <div className="joinWaitlist__input">
              <label>Organization Name</label>
              <input
                type="text"
                placeholder="Enter Organization Name"
                name="organization"
                onChange={updateForm}
                required
              />
            </div>
            {errorMessage && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                }}
              >
                {errorMessage}
              </p>
            )}
            <button className="button button-secondary" disabled={loading}>
              {loading ? "Please wait.." : "Submit"}
            </button>
          </form>
        );
      case SUCCESS:
        return (
          <div className="joinWaitlist">
            <h3>Thank You For Joining Our Waitlist!</h3>
            <p>
              We will surely keep in touch with you on our development progress
              and launch.
            </p>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <CustomModal isOpen={openModal} onClose={onClose} hideButton>
      {renderBasedOnStage()}
    </CustomModal>
  );
};

export default JoinWaitlist;
