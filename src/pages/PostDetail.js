import React from "react";
import Post from "../components/Post";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actionCreators as postActions } from "../redux/modules/post";

// 게시글 상세 페이지
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

//  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];

  React.useEffect(() => {

    // 만약 게시글이 없으면?
    if (post) {
        return;
    }
  
      // 파이어스토어에서 이 게시글 1개 정보만 가져와요!
      dispatch(postActions.getOnePostFB(id));

  }, []);

  return (
    <React.Fragment>
        {post && (
            <Post {...post} />
            //<Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
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
background-color: #212121;
color: #ffffff;
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