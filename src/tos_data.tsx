export const intro = {
  english: (
    <>
      <p>This is a term of service for international customers.</p>
      <p>
        Due to currency differences, international commissions will have higher
        prices. If you're living/working in Vietnam, please tell me and refer to
        the Vietnamese pricings when communicating with me.
      </p>
      <p>
        By commissioning me, you agree that you have read and accepted all the
        terms stated in this document.
      </p>
      <p>
        I will not read each client's specific rules. If you have your own
        rules, please inform me so we can agree upon them; otherwise, I will
        assume you do not have any.
      </p>
      <p>
        Please review my samples before commissioning to ensure my art style can
        fully express what you want, preventing unexpected issues related to the
        style. I will not change my art style based on your requests.
      </p>
    </>
  ),
  vietnamese: (
    <>
      <p>
        Đây là điều khoản dịch vụ dành cho khách đang sinh sống và làm việc tại
        Việt Nam/ thanh toán bằng các phương thức thanh toán ở Việt Nam (Ví dụ:
        Zalopay, Momo, etc.).
      </p>
      <p>
        Bạn đặt commission mình đồng nghĩa với việc bạn đã đọc và đồng ý với tất
        cả những điều nêu trong Term Of Service này.
      </p>
      <p>
        Mình sẽ không đọc riêng rules của từng khách. Nếu bạn có rules riêng,
        vui lòng nói với mình để hai bên thỏa thuận với nhau, còn không mình sẽ
        mặc định là bạn không có.
      </p>
      <p>
        Xem kĩ sample của mình trước khi đặt commission để tránh trường hợp nét
        vẽ không thể hiện được hết những điều bạn mong muốn, dẫn đến những điều
        không mong muốn liên quan đến nét vẽ. Mình không sửa nét theo yêu cầu
        của bạn.
      </p>
    </>
  ),
};

export const items = [
  {
    value: "Capabilities",
    trigger: {
      english: "Regarding My Capabilities",
      vietnamese: "Về khả năng của mình",
    },
    content: {
      english: (
        <div className="flex flex-col gap-4">
          <p>Due to still being in school, I cannot accept rush orders.</p>
          <p>
            I will not draw NSFW, mecha, anything related to politics, or
            anything offensive to the Socialist Republic of Vietnam or the
            Communist Party of Vietnam.
          </p>
          <p>
            I limit drawing: gore, furry, and muscular men. If you still wish to
            commission these, I may need to discuss extending the deadline to
            ensure the best quality artwork.
          </p>
        </div>
      ),
      vietnamese: (
        <div className="flex flex-col gap-4">
          <p>Hiện tại do còn đi học nên mình xin phép không nhận đơn rush.</p>
          <p>
            Mình xin phép không vẽ NSFW, mecha, những thứ liên quan đến chính
            trị và những thứ xúc phạm đến nước Cộng hòa xã hội chủ nghĩa Việt
            Nam và Đảng Cộng sản Việt Nam.
          </p>
          <p>
            Mình hạn chế vẽ gore, furry và đàn ông cơ bắp. Nếu bạn vẫn muốn đặt
            mình thì mình xin phép được thảo luận tăng thời hạn để có thể hoàn
            thành tranh một cách tốt nhất.
          </p>
        </div>
      ),
    },
  },
  {
    value: "Surcharges",
    trigger: {
      english: "Regarding Surcharges",
      vietnamese: "Về phụ phí",
    },
    content: {
      english: (
        <div className="flex flex-col gap-4">
          <p>
            Detailed Characters: Characters with many details will incur an
            extra fee of 2 USD to 5 USD, depending on the number of details. I
            will always notify you in advance and list this separately for
            agreement.
          </p>
          <p>
            Additional Characters: Up to 10 for chibi and up to 3 using simple
            poses for normal commissions. I charge an additional 70% of the
            price of the first character for each extra character added.
          </p>
          <p>
            Commercial Use: All my commissions are for personal use. For
            commercial use, I will add a surcharge of 150%.
          </p>
          <p>
            Private Commissions: I will post your finished artwork (with
            watermark and glaze if my computer allows it) as a sample. If you
            want the commission to be private, I will charge an extra 30%.
          </p>
          <p>
            Revisions:
            <ul className="ml-4 list-disc">
              <li>
                You get 5 free detail revisions if the fault is not mine
                (Example: incorrect with brief, composition different from
                draft, incorrect anatomy, etc., are considered my faults).
              </li>
              <li>
                From the 6th sketch revision and at steps after the sketch
                phase, if the fault is not mine, I charge a fee per detail
                revision.
              </li>
              <li>
                If you want a complete overall revision of the drawing after the
                sketch has been finalized, I charge an additional 5% of the
                artwork's total value.
              </li>
            </ul>
          </p>
        </div>
      ),
      vietnamese: (
        <div className="flex flex-col gap-4">
          <p>
            Nhân vật có nhiều details sẽ tính thêm tiền từ 10.000vnd đến
            50.000vnd tùy theo lượng details, mình sẽ luôn báo trước và tính
            riêng ra để chúng ta có thỏa thuận với nhau.
          </p>
          <p>
            Thêm nhân vật: lên đến 10 đối với chibi và lên đến 3 kèm sử dụng
            pose đơn giản đối với normal. Mình xin tính thêm 70% giá trị nhân
            vật đầu đối với mỗi nhân vật thêm vào.
          </p>
          <p>
            Tất cả commission của mình là commission cá nhân, nếu làm thương mại
            mình xin tính thêm 150%.
          </p>
          <p>
            Mình sẽ đăng tranh của bạn, có watermark và glaze (nếu máy mình đủ
            mạnh), làm sample sau khi đã hoàn thành. Nếu bạn muốn private, mình
            xin tính thêm 30%.
          </p>
          <p>
            Sketch được sửa chi tiết 5 lần free nếu lỗi không phải ở người vẽ
            (Ví dụ: sai brief, bố cục khác với draft, sai anatomy, etc sẽ được
            tính là lỗi của người vẽ). Từ lần sketch thứ 6 và các bước sau
            sketch, nếu lỗi không phải ở người vẽ, mình xin phép lấy 10.000vnd/
            1 lần sửa chi tiết. Mình xin phép lấy thêm 5% giá trị tranh nếu bạn
            muốn chỉnh sửa tổng thể tranh sau khi đã chốt sketch.
          </p>
        </div>
      ),
    },
  },
  {
    value: "Payment",
    trigger: {
      english: "Regarding Payment",
      vietnamese: "Về phương thức thanh toán",
    },
    content: {
      english: (
        <div className="flex flex-col gap-4">
          <p>Platform: All payments must be processed securely through VGen.</p>
          <p>
            Payment Schedule: Please pay at least 50% of the total artwork value
            as a deposit after the brief is finalized, and pay the remaining
            amount after the sketch is finalized. For "Surprise me" commissions,
            please pay the full amount upfront.
          </p>
          <p>Cancellation and Refund:</p>
          <ul className="ml-4 list-disc">
            <li>
              If the client cancels before the draft is provided, I will refund
              the amount.
            </li>
            <li>
              Refund Deduction: Due to currency exchange rates and platform
              processing fees, I may need to subtract 1-2% from the total refund
              amount. This ensures the custom refund can be processed
              successfully by the platform without error.
            </li>
            <li>
              If the client cancels after the sketch is finalized, I will keep
              the deposit (30%) plus a fee based on the current progress of the
              drawing (Example: 50% of the value if the work is in the Render
              step). The remaining money (minus the 1-2% mentioned above) will
              be refunded.
            </li>
            <li>
              I will calculate the price based on my current price list. If you
              were already on the waitlist before I raised the prices, please
              let me know so I can ensure you receive the best benefit.
            </li>
          </ul>
        </div>
      ),
      vietnamese: (
        <div className="flex flex-col gap-4">
          <p>Hiện tại mình chỉ nhận bằng chuyển khoản ngân hàng.</p>
          <p>
            Về chuyển khoản ngân hàng, để đảm bảo quyền lợi, hãy chuyển khoản
            cho mình với nội dung: [Tên facebook của bạn] + [Thể loại
            commission] + [Cọc/Trả full] . (Ví dụ:{" "}
            <em>Nguyễn Văn A_Normal Bust Up_Trả full</em>.)
          </p>
          <p>
            Vui lòng thanh toán ít nhất 30% tổng giá trị tranh để cọc sau khi đã
            chốt brief và thanh toán phần còn lại sau khi đã chốt sketch.
          </p>
          <p>Về hủy tranh và refund:</p>
          <ul className="ml-4 list-disc">
            <li>
              Nếu khách hàng hủy trước draft thì mình sẽ hoàn lại toàn bộ số
              tiền.
            </li>
            <li>
              Nếu khách hàng hủy sau khi đã chốt sketch, mình xin phép giữ lại
              số tiền cọc (30%) + phí dựa trên tiến độ hiện tại của tranh (ví
              dụ: 50% giá trị nếu đang ở bước Render). Phần tiền còn lại sẽ được
              hoàn trả.
            </li>
            <li>
              Mình sẽ tính theo bảng giá hiện tại. Nếu bạn đã có waitlist từ
              trước khi mình tăng giá xin hãy nói mình để mình đảm bảo quyền lợi
              tốt nhất cho bạn.
            </li>
          </ul>
        </div>
      ),
    },
  },
  {
    value: "Process",
    trigger: {
      english: "During the Drawing Process",
      vietnamese: "Trong quá trình vẽ",
    },
    content: {
      english: (
        <div className="flex flex-col gap-4">
          <p>
            My process: Receive Brief → Draft → Sketch → Line → Color Render →
            Finish → Send Artwork.
          </p>
          <p>
            Updates: Throughout the process, I will try to update you on the
            progress at least once a week. You can ask for WIPs, but I will not
            send them if you request them daily.
          </p>
          <p>
            Completion Times (Unless a different deadline is agreed upon):
            Completed within 2 week after the sketch is finalized.
          </p>
          <p>
            Late Delivery: If I miss the deadline without a prior agreement to
            change the date, I will reduce the total artwork price by 1% per day
            late.
          </p>
          <p className="font-semibold text-center">
            Regarding Surprise me Commissions
          </p>
          <p>
            This option applies if you specifically request a "Surprise me"
            commission or a "Skeb-style" workflow.
          </p>
          <p>
            No WIPs: I will go directly from the Brief to the Final Artwork. You
            will not receive drafts, sketches, or progress updates during the
            drawing process.
          </p>
          <p>
            No Revisions: The final artwork is sent as-is I will not accept
            revision requests unless I have made a critical error (e.g., missing
            a specific item explicitly listed in your brief).
          </p>
          <p>
            By choosing this option, you agree to give me full creative freedom
            based on your initial request.
          </p>
        </div>
      ),
      vietnamese: (
        <div className="flex flex-col gap-4">
          <p>Quá trình vẽ của mình sẽ diễn ra theo đại khái như sau:</p>
          <p className="text-center">
            Nhận brief → Draft → Sketch → Line → Color → Render → Finish → Gửi
            tranh
          </p>
          <p>
            Xuyên suốt quá trình vẽ, mình sẽ cố gắng ít nhất 1 tuần 1 lần update
            quá trình với bạn. Bạn có thể hỏi WIP, nhưng mình sẽ không gửi nếu
            bạn yêu cầu hằng ngày.
          </p>
          <p>
            Mình sẽ hoàn thiện trong 2 tuần sau khi chốt sketch. (Không bao gồm
            các trường hợp thỏa thuận thêm thời hạn khác)
          </p>
          <p>
            Trong trường hợp người vẽ trễ deadline: mình sẽ giảm 1% tổng giá
            tranh/ 1 ngày trễ nếu không có thỏa thuận thay đổi hạn trước và tặng
            bạn 1 chiếc colored sketch chibi gift.
          </p>
        </div>
      ),
    },
  },
  {
    value: "Finished",
    trigger: {
      english: "Regarding the Client and the Finished Artwork",
      vietnamese: "Về phía khách hàng và tranh đã hoàn thành",
    },
    content: {
      english: (
        <div className="flex flex-col gap-4">
          <p>
            Sizing: My artwork will have a default size of 3000x3000 with a
            resolution of 300 DPI. If you need a different
            size/ratio/resolution, please inform me before the sketch phase.
          </p>
          <p>
            Delivery: After completion, I will send a Drive link containing the:
            .clip file,.psd file, original.png file, and.png file with glaze.
            This Drive link will be accessible for at least 14 days.
          </p>
          <p>
            Usage: If you post the artwork on social media, please use the.png
            file with glaze and credit my name.
          </p>
          <p>
            AI/NFTs: I do not allow you to use my artwork to feed AI or create
            NFTs for any reason. If you do so, I will issue a transaction
            warning publicly.
          </p>
        </div>
      ),
      vietnamese: (
        <div className="flex flex-col gap-4">
          <p>
            Tranh của mình sẽ có default size là 3000x3000 với resolution là 300
            DPI. Nếu bạn cần size/ tỷ lệ/ resolution khác, hãy nói trước giai
            đoạn sketch với mình.
          </p>
          <p>
            Sau khi hoàn thiện, mình sẽ gửi link drive bao gồm: file.clip, file
            .psd, file.png gốc và file.png có glaze. Link drive này sẽ được mở
            ít nhất 14 ngày, sau đó nếu mình không còn đủ dung lượng drive thì
            mình sẽ xóa, mong bạn tải về để đảm bảo quyền lợi của bản thân.
          </p>
          <p>
            Nếu bạn đăng tranh trên mạng xã hội, vui lòng sử dụng file.png có
            glaze và credit tên facebook của mình.
          </p>
          <p>
            Mình không cho phép bạn dùng tranh của mình feeds cho AI hay làm NFT
            dù bất kỳ lý do nào và mình sẽ lên cảnh báo giao dịch nếu bạn làm
            vậy.
          </p>
        </div>
      ),
    },
  },
];
