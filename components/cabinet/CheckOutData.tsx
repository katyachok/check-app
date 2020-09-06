import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface ICheckOutData {
  title: string;
  selectedRepo: string;
  selectedTask: string;
  selectedBrunch: string;
}

const CheckOutData: React.FC<ICheckOutData> = ({
  title,
  selectedBrunch,
  selectedRepo,
  selectedTask,
}: ICheckOutData) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Title style={{ marginTop: "20px" }} level={2}>
        {title}
      </Title>
      <h2>Your task: {selectedTask} </h2>
      <h2>Your repository: {selectedRepo} </h2>
      <h2>Your brunch: {selectedBrunch} </h2>
      <h2>Your pull request: </h2>
    </div>
  );
};
export default CheckOutData;
