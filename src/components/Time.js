import React, { useState } from 'react';
import '.././Time.css';

function DateTimePretty(Component) {
  return class extends React.Component {
    getDiff(date, currentDate) {
      return currentDate - date;
    }

    timeConversion(millisec) {

      var minutes = Math.floor((millisec / (1000 * 60)).toFixed(1));

      var hours = Math.floor((millisec / (1000 * 60 * 60)).toFixed(1));

      var days = Math.floor((millisec / (1000 * 60 * 60 * 24)).toFixed(1));

      if (minutes < 60) {
        return minutes + "  минут назад";
      } else if (hours < 24) {
        return hours + " часов назад";
      } else {
        return days + " дней назад"
      }
    }

    currentTime = new Date().getTime();
    time = new Date(this.props.date).getTime();


    render() {
      // Здесь можно поменять time на например new Date('January 27, 2022 03:24:00').getTime(); и проверить работоспособность скрипта на часы и минуты
      const timeDiff = this.timeConversion(this.getDiff(this.time, this.currentTime));
      return <Component date={timeDiff} />;
    }
  }
}

const PrettifiedComponent = DateTimePretty(DateTime);

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <PrettifiedComponent date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return (
    <div className="video-container">
      {props.list.map(item => <Video url={item.url} date={item.date} />)}
    </div>
  );
}

export default function Time() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}
