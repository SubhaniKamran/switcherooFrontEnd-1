import React from "react";
const SingleRow = ({ additionalClassOne, title, inputHeight = 25 }) => {
	return (
		<div className="flex mt-2  justify-between items-start w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div
				className={
					additionalClassOne ? additionalClassOne + " w-3/5 " : " w-3/5 "
				}
			>
				<textarea
					className="bg-tertiary w-full"
					style={{ height: inputHeight }}
				></textarea>
			</div>
		</div>
	);
};

export default SingleRow;
