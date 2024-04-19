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
import emptyImage from "./empty.png";

export default function Cart({ data }) {
  // const [total, setTotal] = useState(0);

  const products = useSelector((element) => element.cartReducers.items);

  return (
    <>
      <Col className="m-0 p-0 ">
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
            {products.length > 0 ? (
              products?.map((item) => (
                <section key={item.id}>
                  <CDropdownItem className="text-dark mt-1">
                    <CardImg
                      src={
                        item.payload.images[0] ||
                        item.payload.images[1] ||
                        emptyImage
                      }
                      style={{ width: "35px" }}
                    />
                    {item?.payload?.title?.slice(0, 25)}
                  </CDropdownItem>
                </section>
              ))
            ) : (
              <p className="text-center p-0 m-0 fst-italic">No Items.</p>
            )}
            <CDropdownDivider />

            <CButton className="bg-secondary  w-100 text-white rounded-1">
              Checkout
            </CButton>
          </CDropdownMenu>
        </CDropdown>
      </Col>
    </>
  );
}
