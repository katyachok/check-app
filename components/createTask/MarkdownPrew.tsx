import React from "react";

import { Row, Col, Input } from "antd";

const { TextArea } = Input;

interface IMarkdownPrew {
  getDataFoo: (data: string) => void;
  htmlMarkdown: string;
  mdData: string;
}

const MarkdownPrew: React.FC<IMarkdownPrew> = ({
  getDataFoo,
  htmlMarkdown,
  mdData,
}: IMarkdownPrew) => {
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    getDataFoo(value);
  };

  return (
    <Row gutter={[8, 16]}>
      <Col span={12}>
        <TextArea
          style={{ minHeight: "200px" }}
          autoSize={true}
          onChange={changeHandler}
          value={mdData}
        />
      </Col>
      <Col span={12}>
        <div dangerouslySetInnerHTML={{ __html: htmlMarkdown }}></div>
      </Col>
    </Row>
  );
};

export default MarkdownPrew;
