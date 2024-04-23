import { sendEmail } from '@/service/email';
import * as yup from 'yup';

//yup을 통해 이메일 내용 적합성 검사
const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  //body내용이 email에 적합한지 확인
  const body = await req.json();

  console.log('body!!!!', body);

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: '유효하지 않은 포맷' }), {
      status: 400,
    });
  }

  //노드메일러를 이용해서 메일을 전송
  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: '성공적으로 발송' }), {
          status: 200,
        }),
    )
    .catch((error) => {
      console.log(error);
      return new Response(JSON.stringify({ message: '전송 실패' }), {
        status: 500,
      });
    });
}
