import styled from "styled-components";

const PostModal = (props) => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button>
            <img src="/images/close-icon.png" alt="Close" />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src="/images/user.svg" alt="Close" />
            <span>Name</span>
          </UserInfo>
        </SharedContent>
      </Content>
    </Container>
  );
};

/*
 * When we make top/right/left/bottom - 0 (ZERO) and higher z-index
 * The Modal is going to takeup the whole Screen Width
 */
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: 400;
  display: flex;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  justify-content: space-between;
  align-items: center;
  button {
    border: 0;
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    background-color: #fff;

    img {
      border: 0;
      pointer-events: none;
      width: 20px;
      background-color: #fff;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background-color: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-clip: content-box;
    border: 2px solid transparent;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

export default PostModal;
