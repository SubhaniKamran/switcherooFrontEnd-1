import React from "react";
import RadioButton from "./RadioButton";
const QuestionRow = ({ title, labelOne, labelTwo }) => {
	return (
		<div className="flex mt-2  justify-between items-center w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div className="w-28 flex justify-start">
				<RadioButton isChecked={false} name="isJobApplicant1" labelText="Yes" />
				<RadioButton
					isChecked={false}
					name="isJobApplicant1"
					labelText="No"
					className="ml-12"
				/>
			</div>
			<div className="w-28 flex justify-start">
				<RadioButton isChecked={false} name="isJobApplicant2" labelText="Yes" />
				<RadioButton
					isChecked={false}
					name="isJobApplicant2"
					labelText="No"
					className="ml-12"
				/>
			</div>
		</div>
	);
};

export default QuestionRow;
