import React, { useState } from 'react';
import '.././Highlight.css';

function DetectedComponent(Component) {
  return class extends React.Component {
    render() {
      const views = this.props.views;
      return views > 1000 ? <Popular><Component {...this.props} {...this.state} /></Popular> : <New><Component {...this.props} {...this.state} /></New>
    }
  }
}

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
};

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
};

function Article(props) {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
};

function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};


function List(props) {
  return (<div className="video-container">
    {
      props.list.map(item => {
        let PrettifiedComponent;
        switch (item.type) {
          case 'video':
            PrettifiedComponent = DetectedComponent(Video);
            return (
              <PrettifiedComponent {...item} />
            );

          case 'article':
            PrettifiedComponent = DetectedComponent(Article);
            return (
              <PrettifiedComponent {...item} />
            );
        }
      })
    }
  </div>)
};

export default function Highlight() {
  const [list, setList] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return (
    <List list={list} />
  );
}
