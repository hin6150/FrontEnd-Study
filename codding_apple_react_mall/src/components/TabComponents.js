import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function TabComponents({ tab, setTab }) {
  const [fade, setFade] = useState("");
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent idx={tab} setFade={setFade} fade={fade}></TabContent>
    </>
  );
}

function TabContent({ idx, fade, setFade }) {
  useEffect(() => {
    setTimeout(() => {
      setFade(1);
    }, 100);

    return () => {
      setFade(0);
    };
  }, [idx]);

  return (
    <div
      css={css`
        opacity: ${fade};
        transition: opacity ${fade * 0.5}s;
      `}
    >
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][idx]}
    </div>
  );
}

export default TabComponents;
