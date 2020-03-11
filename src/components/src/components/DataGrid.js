import React from "react";

const DataGrid = ({ applicant, children }) => {
	return (
		<>
			<div className="elements-container mt-6 flex justify-between flex-wrap">
				<div className="w-full color-primary uppercase font-semibold">
					<h2>Applicant {applicant}</h2>
					{children}
					<br />
				</div>
				<div className="w-15 ">Type of Outgoing </div>
				<div className="w-15 ">Lender Name </div>
				<div className="w-15 ">Purpose of Loan </div>
				<div className="w-15 ">Terms of Loan e.g. 4 years remaining</div>
				<div className="w-15 ">Balance </div>
				<div className="w-15 ">Monthly Payment</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-4">
					<div style={{ width: "66%" }}>
						<p className="uppercase ">Total</p>
					</div>
					<input className="w-15 bg-tertiary" />
					<input className="w-15 bg-tertiary" />
				</div>
				<div>
					<p className="font-semibold  mt-6">Additional Commitments</p>
				</div>
				<div className="flex w-full  justify-between">
					<div style={{ width: "32%" }}>Type </div>
					<div style={{ width: "32%" }}> Amount </div>
					<div style={{ width: "32%" }}> Frequency</div>
				</div>
				<div className="flex w-full  justify-between mt-2">
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
				</div>
				<div className="flex w-full  justify-between mt-2">
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
				</div>
				<div className="flex w-full  justify-between mt-2">
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
				</div>
			</div>
		</>
	);
};

export default DataGrid;
