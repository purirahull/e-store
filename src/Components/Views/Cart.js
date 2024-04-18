import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import React from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart({ data }) {
  // const [total, setTotal] = useState(0);

  const products = useSelector((element) => element.cartReducers.items);

  return (
    <>
      <Col className="m-0 p-0">
        <CDropdown direction="center">
          <CDropdownToggle
            color="white"
            className="border-0 p-1 text-dark text-nowrap"
          >
            <CIcon
              icon={freeSet.cilCart}
              className="ms-1 text-white "
              size="xl"
            />
            <CBadge color="danger" shape="rounded-pill">
              {data}
            </CBadge>
          </CDropdownToggle>
          <CDropdownMenu className="rounded-0 shadow-lg p-2 mt-3 border-0">
            {products
              ? products?.map((item) => (
                  <CDropdownItem className="text-dark mt-1" key={item.id}>
                    <CardImg
                      src={item.payload.images[0] || item.payload.images[1]}
                      style={{ width: "35px" }}
                    />
                    {item.payload.title}
                  </CDropdownItem>
                ))
              : null}
            <CDropdownDivider />
            <CButton className="bg-secondary w-100 text-white rounded-1">
              Checkout
            </CButton>
          </CDropdownMenu>
        </CDropdown>
      </Col>
    </>
  );
}
