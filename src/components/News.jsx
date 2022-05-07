import React from 'react';
import {Row, Col, Card, Avatar, Typography} from "antd";
import moment from 'moment';

import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';
// import { useGetCryptosQuery } from '../services/cryptoAPI';
const {Text, Title} = Typography;
// const {Option} = Select;

const News = ({simplified}) => {
  // const { data } = useGetCryptosQuery(10);

  const count = simplified ? 5: 15;
  const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
  // const [newsCategory, setNewsCategory] = useState();
  const {data: cryptoNews} = useGetCryptosNewsQuery({newsCategory: "Crpytocurrency", count: count});
  
  

  if (!cryptoNews?.value) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {/* {! simplified && (
        <Col span={24} >
          <Select
            showSearch
            className='select-news'
            placeholder="Select a crypto"
            optionFilterProp='children'
            onChange={(value)=>console.log(value)}
            filterOption={(input, option)=>option.children.toLowerCase().indexOf(input.toLowerCase()) >=0}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
            </Select>
        </Col>
      )} */}
      {cryptoNews.value.map((news, i)=> 
      <Col xs={24} sm={8} lg={8} key={i}>
        <Card hoverable className='news-card'>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className='news-image-container'>
              <Title className='news-title' level={4}>
                {news.name}
              </Title>
              <img style={{ maxWidth: '200px', maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
            </div>
              <p>
                {news.description > 100 ? `${news.descritpion.substring(0, 100)}...` : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt="" />
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('s').fromNow()}</Text>
              </div>
          </a>

        </Card>
      </Col>
      )}
    </Row>
  );
};

export default News;