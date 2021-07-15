import React from "react";
import Post from "../components/Post";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {Image} from "../elements"

import { actionCreators as postActions } from "../redux/modules/post";

import Permit from "../shared/Permit";

// 게시글 상세 페이지
const PostDetail = (props) => {
  const dispatch = useDispatch();

  //<Route path="/view/:id" exact component={PostDetail} />
  const id = props.match.params.id;

  const {history} = props;//history를 props에서 가지고 온다.    


//  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);
 
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];
  //const is_me = post.user_info.user_id === user_info?.uid;


  const goBack = () =>{
    props.history.push('/')
  }

  const editPost = (e) =>{
    console.log("editPost Click");
    e.preventDefault();
    e.stopPropagation();
    history.push(`/post/${id}`);
  }

  const deletePost = (e) =>{
    console.log("deletePost Click");
    e.preventDefault();
    e.stopPropagation();

    if(window.confirm("정말로 지우실건가요?")){
        console.log("진짜 지운대")
        dispatch(postActions.deletePostFB(id));
        return;
    }
    console.log("안지운대")
    return;
  }

  React.useEffect(() => {
    if (post) {
        return;
    }
      dispatch(postActions.getOnePostFB(id));
  }, []);

  return (
    <React.Fragment>
        {post && (<Grid margin="20px auto" width="900px">
            <Grid bg="#E6D4CA"
                padding="40px 60px">
                    <Grid is_flex>
                        <Text bold size='36px'>상세보기</Text>
                        <Text>{post.insert_dt}</Text>
                    </Grid>
                    
                    <Grid padding="8px 0px">
                    <Text>제목:{post.title}</Text>
                    </Grid>

                    <Grid padding="8px 0px">
                    <Text>글쓴이: {post.author}</Text>
                    </Grid>

                    <Grid padding="8px 0px">
                    <Text>내용: {post.comment}</Text>
                    </Grid>

                    <Grid padding="8px 0px">
                    <Image shape="rectangle" src={post.image_url} />
                    </Grid>
                 
                    <Grid is_flex>
                        <Button width="100px" padding="10px" bold onClick={goBack}>뒤로가기</Button>
                        <Grid is_flex>
                        <Button width="100px" padding="10px" margin="0px 5px" bold onClick={editPost}>수정</Button>
                        <Button width="100px" padding="10px"margin="0px 5px" bold onClick={deletePost}>삭제</Button>
                       </Grid>
                       {/* {is_me  && ( //자기자신일 때만 보여준다.
                        <Grid is_flex>
                        <Button width="100px" padding="10px" margin="0px 5px" bold onClick={editPost}>수정</Button>
                        <Button width="100px" padding="10px"margin="0px 5px" bold onClick={deletePost}>삭제</Button>
                       </Grid>)}*/}
                    </Grid>

                </Grid>
            </Grid>
            
            
            /*{post && (
            <Post {...post} />
            //<Post {...post} is_me={post.user_info.user_id === user_info?.uid} />*/
      )}
    </React.Fragment>
  );
};

export default PostDetail;

const Text= styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const Button=styled.button`

width: ${(props) => props.width};
background-color: #FFFCFA;
color: #212121;
padding: ${(props) => props.padding};
box-sizing: border-box;
border: none;
${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`

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