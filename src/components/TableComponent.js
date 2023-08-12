import React from "react";
import { Table } from "antd";

import { useRouter } from "next/navigation";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
  // Add more columns as needed
];

const TableComponent = (props) => {
  const router = useRouter();

  const {
    data: { products: listProduct },
  } = props;

  const handleOnShowDetail = (record) => {
    props.showDetail(record);
  };

  return (
    <Table
      columns={columns}
      dataSource={listProduct}
      onRow={(record, _) => {
        return {
          onClick: () => {
            handleOnShowDetail(record);
          },
        };
      }}
    />
  );
};

export default TableComponent;
