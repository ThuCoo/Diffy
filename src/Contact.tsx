import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Contacts() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h2 className="text-2xl text-amber-100 text-center">Contact Me At</h2>
      <div className="flex gap-8 items-center justify-center">
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://www.facebook.com/profile.php?id=100094207964040"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="facebook.svg" alt="Facebook" className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://x.com/diffy12numbers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="x.svg" alt="Twitter" className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://bsky.app/profile/difffy.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="bluesky.svg" alt="Bluesky" className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://www.tiktok.com/@thucohehehe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="tiktok.svg" alt="TikTok" className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://vgen.co/diffy12numbers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="VGen.png" alt="VGen" className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <h2 className="text-2xl text-amber-100 text-center">About Me</h2>
      <div className="flex flex-col gap-4 max-w-2xl">
        <p>Mình là Thu Cỏ, bạn cũng có thể gọi mình là Cõ, Diffy, weed, etc.</p>
        <p>
          Mình là nữ, đủ tuổi đu tì nhưng mình ổn với bất kỳ danh xưng nào. Nếu
          mình nói chuyện thân với bạn mình sẽ hay xưng em hơn, nếu bạn không
          thích xin hãy nhắc mình ạ.
        </p>
        <p>
          Mình đang năm 3 đại học nên sẽ không túc trực mạng xã hội 24/7, nếu
          cần nhắn mình thì mình hay online vào khoảng 20h đến 23h tối hàng
          ngày.
        </p>
      </div>
      <Accordion type="multiple" className="max-w-2xl w-full" defaultValue={[]}>
        <AccordionItem value="Fandoms">
          <AccordionTrigger>Fandoms và ships</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <p>
                Về anime: mình coi anime về ẩm thực là chính, lâu lâu coi lại
                mấy bộ anime cũ. Lâu lâu mình cũng sẽ coi mấy bộ anime mới vui
                vui thôi chứ không join fandoms đồ nên nếu bạn biết mình thông
                qua fanart bộ nào đó thì hơi chia buồn cho bạn.
              </p>
              <p>
                Về game: mình đang chơi Honkai Star Rail, Cookie Run Kingdom,
                Deltarune và từng chơi các game cùng nph với các game trên. Mình
                đang có đam mê với mấy game horror rpg nên hay coi walkthrough
                với phân tích nhưng không chơi vì mình nhát và sẽ hay yap nhảm
                về mấy game đó ạ.
              </p>
              <p>
                Hiện tại mình support LCK và coi mấy anh cờ đỏ T1, mình có ship
                AllKer nhưng sẽ không nhắc/vẽ couple ạ, nếu bạn thấy tranh thì
                mong bạn chỉ xem là anh em bạn bè. Mình cũng không cổ xúy cho
                việc ship người thật, tất cả những thứ mình vẽ là sản phẩm trí
                tưởng tượng, dùng để mua vui cho mình.
              </p>
              <p>
                Về ship: mình ship Pure Vanilla x White Lily x Shadow Milk x
                Elder Faerie (CRK), SentiHuaSenti (HI3), còn lại mình đều
                support. Mình thấy hàng ngon là húp nên không chê ship nào, kể
                cả bạn có ship với 1 người trong các cặp hiện tại mình đang
                ship. Nếu bạn thấy mình có nhắc không tốt về ship nào đó thì nó
                là do một số interactions không tốt mình đã gặp phải khi gặp một
                số người tôn sùng cặp ship đó, tuy mình hiểu rõ nó không đại
                diện cho một tập thể nhưng mình sẽ có một số phản ứng tiêu cực
                nhất định, mong bạn thông cảm.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Others">
          <AccordionTrigger>Others</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <p>
                Mình không cho phép bạn feed tranh mình cho AI. Mình có học qua
                về AI rồi nên mình cũng không cần ai thay đổi góc nhìn của mình
                về AI cả.
              </p>
              <p>
                Mình đủ nhận thức để hiểu được thế nào là thật thế nào là ảo, đủ
                lớn để biết được thế nào là trái phải và mình mong rằng những ai
                tương tác với mình cũng sẽ như vậy. Vì thế, mình mong bạn sẽ
                không áp đặt tam quan đời thật vào những thứ mình đăng trên
                mạng.
              </p>
              <p>
                Mình không rảnh để đôi co, mình theo quan niệm rằng nếu không
                hợp nhau thì bỏ qua đời nhau cho lành. Nếu bạn không cùng lối
                suy nghĩ với mình, mình sẽ block. Nếu bạn spam mình, mình sẽ
                block. Mình đặc biệt kị việc bạn đụng vào người nhà mình, mình
                sẽ block và lên bài cảnh báo nếu bạn làm vậy.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
