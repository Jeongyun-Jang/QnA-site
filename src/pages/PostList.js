// PostList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Post from "../components/Post";
import { actionCreators as postActions } from "../redux/modules/post";
//import { Grid } from "../elements";

const PostList = (props) => {

    const dispatch = useDispatch();
    const {history} = props;//history를 props에서 가지고 온다.    
    const post_list = useSelector((state) => state.post.list);

    React.useEffect(() => {
        //  게시글이 2개 미만일 때는 getPostFB를 호출해서 목록을 불러옵니다.
        /*if (post_list.length < 2) {
          dispatch(postActions.getPostFB());
        }*/
        dispatch(postActions.getPostFB());
    }, dispatch);

    console.log("PostList페이지로 LOAD:", post_list)

    return (
        <React.Fragment>
            <Grid margin="20px auto" width="900px">
                <Grid bg="#E6D4CA"
                    margin="20px auto"
                    padding="40px 60px">
                    <Text bold size='36px'>게시판 만들기</Text>
                    <Text>아주 간단한 게시판을 만들어봅시다.</Text>

                    <Button onClick={() => {
                        /*
                        if(window.confirm("로그인이 필요해요! 로그인페이지로 이동할까요?")){
                            console.log("로그인페이지로 이동")
                            props.history.push("/login");
                            return;
                        }
                        props.history.replace("/");
                        return;*/
                        props.history.replace("/post");
                  }} width="100px" bg="#FFFCFA" padding="10px"
                    >글쓰기</Button>
                </Grid>

                <Grid padding="20px 20px" border="solid 3px" lineColor="#EBC2AC">
                    <Grid is_flex padding="4px 60px">
                        <Text>글번호</Text>
                        <Text>글쓴이</Text>
                        <Text>글제목</Text>
                    </Grid>  
                    {
                     post_list? post_list.map((p, idx) => {
                        return (
                            <Grid is_flex 
                            key={p.id}
                            bg="#eee"
                            padding="2px 60px"
                            margin="4px"
                            onClick={() => {
                                history.push(`/view/${p.id}`);
                                console.log("클릭되었습니다.")
                            }}
                            >
                            <Text>{post_list.length - idx}</Text>
                            <Text>{p.title}</Text>
                            <Text>{p.author}</Text>
                            </Grid>
                        );
                    }) : console.log("출력할게 없습니다.")}

                 
                </Grid>
            </Grid>


        </React.Fragment>
    )
}

export default PostList;


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
  ${(props) => props.border? `border: solid 2px;`: ""}
  ${(props) => (props.lineColor? `border-color: ${props.lineColor};` : "")}
`;

const Button=styled.button`

width: ${(props) => props.width};
background-color: ${(props) => props.bg};
color: #212121;
padding: ${(props) => props.padding};
box-sizing: border-box;
font-weight: ${(props) => (props.bold? "600" : "400")};
${(props) => (props.margin ? `margin: ${props.margin};` : "")}
${(props) =>
    props._onClick
      ? `onClick: ${(props)=>(props._onClick)}; `
      : ""}

`

