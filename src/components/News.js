import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
      const storyIds = await response.json();
      const topStories = await Promise.all(storyIds.slice(0, props.pageSize).map(async (storyId) => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
        return await storyResponse.json();
      }));
      setArticles(topStories);
    } catch (error) {
      console.error("Error fetching top stories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsSphere`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  const fetchMoreData = async () => {
    // Hacker News API doesn't support pagination for top stories
    // You can decide what to do here based on your requirements
    // For example, you can fetch the next batch of top stories and append them to the existing articles
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        NewsSphere - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author || ""}
                    date={element.publishedAt}
                    source={element.source ? element.source.name : "Unknown"} // Provide a fallback value
                    setSignedin={props.setSignedin}
                    signedin={props.signedin}
                    state={props.state}
                    content={element.content}
                    articles={articles}
                    setArticles={setArticles}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
