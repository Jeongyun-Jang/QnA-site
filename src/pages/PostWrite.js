import React from "react";
//import { Grid, Text, Button, Image, Input } from "../elements";
//import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
//import { actionCreators as imageActions } from "../redux/modules/image";
import styled from "styled-components";


//   게시글 수정과 작성을 이 컴포넌트 하나로 할거예요.
const PostWrite = (props) => {
  const dispatch = useDispatch();
  //const is_login = useSelector((state) => state.user.is_login);
  //const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);


  //   주소창을 보고 id값을 가져와요.
  const post_id = props.match.params.id;
  //   post id를 가지고 수정모드인 지, 작성 모드인지 구분해줍니다.
  //const is_edit = post_id ? true : false;

  const { history } = props;

  //   수정모드라면? 게시글 정보를 가져와요!
  // 미리 어느정도 정보를 넣어주기 위해서 가져오는 거예요 :)
  //let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

/*  const [title, setTitle] = React.useState(_post ? _post.title : "");
  const [author, setAuthor] = React.useState(_post ? _post.author : "");
  const [comment, setComment] = React.useState(_post ? _post.comment : "");
*/
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [comment, setComment] = React.useState("");

  // layout_type을 정하는 부분입니다!

//   const [layout_type, setLayoutType] = React.useState(
//     _post ? _post.layout_type : ""
//   );
/*
  React.useEffect(() => {
    // 수정모드인데, 게시글 정보가 없으면? 경고를 띄우고 뒤로 가게 합니다.
    if (is_edit && !_post) {
      window.alert("포스트 정보가 없어요!");
      history.goBack();

      return;
    }

    // 수정모드라면?
    // 이미지 미리보기도 하나 넣어줘야죠!
    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);
*/
  //   내용을 바꿔주는 함수
  // useState를 이용해요!
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const changeComment = (e) => {
    setComment(e.target.value);
  };

  // 레이아웃 타입을 정해주는 함수
  // useState를 이용해요!
  /*
  const changeLayoutType = (e) => {
    setLayoutType(e.target.value);
  };*/

  //   게시글을 추가하는 함수
  const addPost = () => {
    console.log("addPost실행==>",title,author,comment)
    dispatch(postActions.addPostFB(title, author, comment))
    console.log("addPostFB에 전송 완료")
    //dispatch(postActions.addPostFB(contents, layout_type));
  };

  //   게시글을 수정하는 함수
  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { title: title, author: author, comment:comment }));
    //dispatch(postActions.editPostFB(post_id, { contents: contents }));
  };

  //   로그인 하지 않았다면? 로그인 사용자만 작성할 수 있다는 화면을 보여줘요!
  /*
  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }*/

  return (


    <React.Fragment>
            <Grid margin="90px auto" width="900px">
                <Grid bg="#eee"
                    padding="40px 60px">
                    <Grid padding="8px 0px">
                    <Input
                        value={title}
                        onChange={changeTitle}
                        placeholder="제목"
                    
                        />
                    </Grid>

                    <Grid padding="8px 0px">
                    <Input
                        value={author}
                        onChange={changeAuthor}
                        placeholder="글쓴이"
                        />
                    </Grid>

                    <Grid padding="8px 0px">
                    <Input
                        value={comment}
                        onChange={changeComment}
                        placeholder="내용"
                        multiLine
                        
                        />
                    </Grid>

                    <Button width="100px" onClick={addPost}>글쓰기</Button>
                </Grid>
            </Grid>
        </React.Fragment>

    /* 
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          {is_edit ? "게시글 수정" : "게시글 작성"}
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>

        <Image
          shape="rectangle"
          src={preview ? preview : "http://via.placeholder.com/400x300"}
        />
      </Grid>

      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
      </Grid>

      <Grid padding="16px">
        <Input
          type="text"
          value={layout_type}
          _onChange={changeLayoutType}
          label="레이아웃 타입"
          placeholder="a, b, c 중 하나를 골라주세요."
        />
      </Grid>

      <Grid padding="16px">
        {is_edit ? (
          <Button _onClick={editPost}>게시글 수정</Button>
        ) : (
          <Button _onClick={addPost}>게시글 작성</Button>
        )}
      </Grid>
    </React.Fragment>*/

  );
};

export default PostWrite;



const Text= styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;


const Grid = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => props.center? `text-align: center;`: ""}
`;

const Button=styled.button`

width: ${(props) => props.width};
background-color: #212121;
color: #ffffff;
padding: ${(props) => props.padding};
box-sizing: border-box;
border: none;
${(props) => (props.margin ? `margin: ${props.margin};` : "")}
${(props) =>
    props._onClick
      ? `onClick: ${(props)=>(props._onClick)}; `
      : ""}
`

const Input = styled.input`
    ${(props) =>
        props.multiLine
        ? `rows: ${props.rows} `
        : ""}
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    margin: ${(props)=>props.margin};
`;