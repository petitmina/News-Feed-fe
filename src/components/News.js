import React, { useEffect, useState } from 'react'
import axios from 'axios';

const News = () => {
    const [data, setData] = useState(null);
 
	const onClick = async(type, param) => { 
		try{
            const apiUrl = '/api/v1/search/' + type + '?query=' + param;
			const response = await axios.get(apiUrl, {
				headers:{
					'X-Naver-Client-Id': process.env.REACT_APP_NAVER_NEWS_CLIENT_ID, 
					'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_NEWS_CLIENT_SECRET
				},
			});

			console.log(response.data);
			setData(response.data);
		} catch(e){
			console.log(e);
		}
	}
	
    useEffect(() => {
        onClick('news', '코스피');
    }, []);

	return(
		<div>
			네이버 뉴스 불러오기
			{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        
		</div>
	)
}


export default News
