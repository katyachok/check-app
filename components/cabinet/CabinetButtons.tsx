import React from "react";

import { Button, message } from "antd";

interface ISteps {
  title: string;
  content: JSX.Element;
}

interface ICabinetButtons {
  currentPage: number;
  checkSelects: (pageID: string) => void;
  next: () => void;
  checkIsFailedForPrev: () => void;
  steps: ISteps[];
}

const CabinetButtons: React.FC<ICabinetButtons> = ({
  checkIsFailedForPrev,
  currentPage,
  checkSelects,
  next,
  steps,
}: ICabinetButtons) => {
  return (
    <div>
      <div className="steps-action" style={{ marginTop: "20px" }}>
        {currentPage < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              currentPage === 0 && checkSelects("tasks");
              currentPage === 1 && checkSelects("repos");
              currentPage === 2 && next();
              currentPage === 3 && checkSelects("PR");
            }}
          >
            Next
          </Button>
        )}
        {currentPage === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {currentPage > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => checkIsFailedForPrev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default CabinetButtons;
