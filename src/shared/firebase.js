//notice-board-two

import firebase from "firebase/app";

    // 사용할 것들을 전부 불러옵니다 :)
    import "firebase/auth";
    import "firebase/firestore";
    import "firebase/storage";
    import "firebase/database";
    
    const firebaseConfig = {
      // 인증 정보를 넣어주세요!(댓글 x, 좋아요 o)
        apiKey: "AIzaSyCb4yPp_J5iLUo8EQzPVhFDN3ZW3ZbI-ys",
        authDomain: "notice-board-two.firebaseapp.com",
        projectId: "notice-board-two",
        storageBucket: "notice-board-two.appspot.com",
        messagingSenderId: "1070646629427",
        appId: "1:1070646629427:web:f375ebd695fdc07677bf46"
      
    };
    
    firebase.initializeApp(firebaseConfig);
    
    //const apiKey = firebaseConfig.apiKey;
    //const auth = firebase.auth();
    const firestore = firebase.firestore();
    //const storage = firebase.storage();
    //const realtime = firebase.database();
    
    export { //auth, apiKey,storage, realtime, 
        firestore  };
    