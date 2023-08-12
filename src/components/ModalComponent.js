import React from "react";
import { Button, Modal } from "antd";

function ModalComponent(props) {
  const { data: productData, isShow, handleSetIsModalVisible } = props;

  const handleOk = () => {
    handleSetIsModalVisible(false);
  };

  const handleCancel = () => {
    handleSetIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        title={productData.title}
        visible={isShow}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Đóng
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <div>
          <img
            style={{ maxWidth: 140 }}
            src={productData.thumbnail}
            alt={productData.title}
          />
          <h2>{productData.title}</h2>
          <p>{productData.description}</p>
          <p>Giá: {productData.price} USD</p>
          <p>Giảm giá: {productData.discountPercentage}%</p>
          <p>Đánh giá: {productData.rating}</p>
          <p>Số lượng còn: {productData.stock}</p>
          <p>Thương hiệu: {productData.brand}</p>
          <p>Danh mục: {productData.category}</p>
        </div>
      </Modal>
    </div>
  );
}

ModalComponent.propTypes = {};

export default ModalComponent;
