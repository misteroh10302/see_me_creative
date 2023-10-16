import * as React from "react"
import { useEffect, useState, FormEvent } from "react"
import styled from "styled-components"

const CALLBACK_KEY = 'newsletterCallback'

const NewsletterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  mix-blend-mode: difference;
  padding: 0 3rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: calc(100vw - 3rem);

  & > p {
    font-size: 1.2rem;
    margin: 0.4rem 0 0 !important;
    padding: 0 3rem 0 0;
    line-height: 1.8rem;
    overflow: hidden;
    max-height: ${props => props.$showMessage ? 100 : 0}px;
    max-width: 350px;
    transition: max-height 0.8s, max-width 0.8s;
    text-align: right;
  }
`

const NewsletterFormWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  max-width: 100%;

  form {
    margin: 0;
    display: flex;
    gap: 8px;
    max-width: ${props => props.$expanded ? 250 : 0}px;
    transition: max-width 0.8s cubic-bezier(0,0,0.2,1);
    overflow: hidden;
  }

  button, input {
    font-size: 1.2rem;
    background: transparent;
    border: none;
    color: white;
    outline: none;
    padding-left: 0;
  }

  button {
    font-family: ${props => props.theme.font.seeSans}, serif;
    text-transform: uppercase;
    cursor: pointer;
  }

  input:not([type="submit"]) {
    font-family: ${props => props.theme.font.sans}, serif;
    border-bottom: 0.5px solid #ffffff8a;
    font-size: 1.3rem;
    width: 200px;
    padding: 0;
    max-width: ${props => props.$expanded ? 200 : 0}px;
    transition: max-width 0.8s cubic-bezier(0,0,0.2,1);
    overflow: hidden;
  }

  input[type="submit"] {
    font-family: ${props => props.theme.font.sans}, serif;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 400;
    color: #ffffffd4;
  }
`

const NewsletterForm = ({ url }: NewsletterForm) => {
  const [expanded, setExpanded] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // Set a callback on the window for the jsonp method to fire
    (window as any)[CALLBACK_KEY] = ({ result, msg }: { result: 'success' | 'error', msg: string }) => {
      if (result === 'error') {
        setMessage(`Error: ${msg.replace('0 - ', '')}`)
      } else if (result === 'success') {
        setMessage('Subscribed')
        setEmail('')

        // Close form after 3 seconds
        setTimeout(() => {
          if (email === '') setExpanded(false)
        }, 3000)
      }
      setShowMessage(true)
    }
  }, [])

  if (!url) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email.trim()) return

    // Clean up previous submissions
    const previousSubmission = document.getElementById(CALLBACK_KEY)
    if (previousSubmission) previousSubmission.remove()

    // Clear message if the message is hidden. This prevents a flash of the previous message when transitioning
    if (!showMessage) setMessage('');

    // Using jsonp method to get around cors issue. Mailchimp uses "c" as callback param
    const apiUrl = url.replace('post?', 'post-json?') + `&EMAIL=${encodeURIComponent(email)}&c=${CALLBACK_KEY}`
    const script = document.createElement('script');
    script.id = CALLBACK_KEY
    script.type = "text/javascript";
    script.src = apiUrl

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  return (
    <NewsletterWrapper $showMessage={showMessage && expanded}>
      <NewsletterFormWrapper $expanded={expanded}>
        <button onClick={() => {
          setExpanded((expanded) => !expanded)
          if (showMessage) setShowMessage(false)
        }}>Newsletter</button>
        <form onSubmit={handleSubmit}>
          <input placeholder="Email" value={email} onChange={({ target }) => {
            setEmail(target.value)
            if (showMessage) setShowMessage(false)
          }} />
          <input type="submit" value="→" />
        </form>
      </NewsletterFormWrapper>
      <p>{message}</p>
    </NewsletterWrapper>
  )
}

interface NewsletterForm {
  url?: string
}

NewsletterForm.defaultProps = {
  content: {},
}

export default NewsletterForm
