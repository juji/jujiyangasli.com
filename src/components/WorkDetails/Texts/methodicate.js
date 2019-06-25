import React from 'react'

export default props => {

  return <div>
    <div><a href="https://www.methodicate.com/" target="_blank">https://www.methodicate.com/</a></div>
    <p>A noble cause, to venture in science..</p>
    <p>Methodicate asked me to create a document converter. They wanted to create a publishable pdf version of all the user's research.</p>
    <p>We used <a href="https://pandoc.org/" target="_blank">Pandoc</a> for that.</p>
    <p>We created a microservice, listening on RabbitMQ that converts a methodicate-format Research to pdf.</p>
    <br />
    <p>Technologies used:&nbsp;
      <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>,&nbsp;
      <a href="https://www.rabbitmq.com/" target="_blank">RabbitMQ</a>,&nbsp;
      <a href="https://aws.amazon.com/elasticbeanstalk/" target="_blank">Elastic Beanstalk</a>,&nbsp;
      and of course, <a href="https://pandoc.org/" target="_blank">Pandoc</a>.
    </p>
  </div>

}
