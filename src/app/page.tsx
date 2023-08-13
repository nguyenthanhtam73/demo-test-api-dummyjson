"use client";

import { useEffect, useState } from "react";

import ModalComponent from "../components/ModalComponent";
import TableComponent from "../components/TableComponent";

import { fetchProducts } from "../utils/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [dataDetail, setDataDetail] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  const handleShowDetail = (data: any) => {
    setDataDetail(data);
    setIsModalVisible(true);
  };

  const handleSetIsModalVisible = (data: any) => {
    if (!data) {
      setDataDetail({});
    }
    setIsModalVisible(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TableComponent data={products} showDetail={handleShowDetail} />
      <ModalComponent
        data={{
          data: dataDetail,
          isShow: isModalVisible,
          handleSetIsModalVisible: handleSetIsModalVisible,
        }}
      />
    </main>
  );
}
