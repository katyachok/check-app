import React from "react";

interface ICheckTask {
  htmlMarkdown: string;
  taskName: string;
  maxScore: number;
  taskDescription: string;
}

const CheckTask: React.FC<ICheckTask> = ({
  htmlMarkdown,
  taskName,
  maxScore,
  taskDescription,
}: ICheckTask) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Check Task</h1>
        <h1>Your task name: {taskName}</h1>
        <h1>Your maximum score: {maxScore} </h1>
        {taskDescription && (
          <React.Fragment>
            <h1>Task description:</h1>
            <h1 style={{ margin: "0 auto", maxWidth: "1000px" }}>
              {taskDescription}
            </h1>
          </React.Fragment>
        )}
      </div>
      {htmlMarkdown && (
        <React.Fragment>
          <h1 style={{ marginBottom: "20px" }}>Markdown:</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlMarkdown }}></div>
        </React.Fragment>
      )}
    </>
  );
};

export default CheckTask;
