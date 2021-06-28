import {Card, Button, message as notification} from 'antd';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {unseenComment, useCommentsStream} from "../../adapters/comments";
import {selectors} from '../../modules/Auth';
import {EyeOutlined} from '@ant-design/icons'
import {formatDate} from '../../helpers'
const DEF_IMG = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
interface CommentType {
    comment: string,
    userId: string,
    documentId: string,
    createdAt: number,
    id: string,
    file: string,
}

const {Meta} = Card;

const Main = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    position: relative
  }
`;

const C = styled(Card)`
  width: calc(100%/5.2);
  cursor: default;
  @media (max-width: 1280px) {
    width: calc(100%/4.1);
  }
  @media (max-width: 1204px) {
    width: calc(100%/3.1);
  }
  @media (max-width: 750px) {
    width: calc(100%/2.1);
  }
  @media (max-width: 500px) {
    width: calc(100%);
  }
`;

const BT = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

const Span = styled.span`
  text-wrap: inherit;
  word-break: break-all;
`;

const TextDiv = styled.div`
  max-height: 100px;
  height: 100px;
  overflow: auto;
`

const UnSeenMessages = () => {
    const user = useSelector(selectors.selectUser);
    const messages = useCommentsStream(user.id);
    const markAsSeen = (comment: CommentType) => () => {
        unseenComment(comment).then(() => {
            notification.success('მოინიშნა წაკითხულად')
        }).catch((e) => {
            notification.error('ვერ მოხერხდა წაკითხულად მონიშვნა')
        })

    }

    return (
        <Main>
            {
                messages?.map((m: CommentType) =>
                    <C
                        key={m.documentId}
                        actions={[
                            <BT key={m.documentId}
                                type="dashed"
                                shape="round"
                                icon={<EyeOutlined/>}
                                size={'large'}
                                onClick={markAsSeen(m)}/>,
                        ]}
                        hoverable
                        cover={<img alt="document" src={m.file || DEF_IMG}/>}
                    >
                        <TextDiv>
                            <Span>{m.comment}</Span>
                        </TextDiv>
                        <Meta description={formatDate(m.createdAt, "yyyy.MM.dd")}/>
                    </C>
                )
            }
        </Main>
    )
}


export default UnSeenMessages
