const ToeicDirection = () => {
    return (
        <section>
            <h2>TOEIC Info</h2>
            <h3 className="mb-4 text-primary">
                วิธีเดินทางไปศูนย์สอบ
            </h3>
            <div className="h-[500px] overflow-y-auto">
                <div className="mb-8">
                    <p><span className="font-semibold">ศูนย์สอบกรุงเทพฯ:</span> อาคาร BB Building เลขที่ 54 ชั้น 19 ห้อง 1907 ถนนอโศกมนตรี ซอยสุขุมวิท 21 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110</p>

                    <ul className="list-disc list-outside ml-5 mt-4 mb-4">
                        <li >
                            รถไฟฟ้า BTS: ลงสถานีอโศก เดินออกประตูทางออกที่ 3 เพื่อเข้าถนนอโศก-มนตรี จากนั้นเรียกวินมอเตอร์ไซค์ต่อเข้าไปได้

                        </li>
                        <li>รถไฟใต้ดิน MRT: ลงสถานีเพชรบุรี ออกทางออกที่ 2 หรือ สถานีสุขุมวิท จากนั้นเรียกวินมอเตอร์ไซค์ต่อเข้าไปได้

                        </li><li>รถโดยสารประจำทาง: สาย 38, 98, 136, 185 สามารถลงได้ที่ป้าย Midtown อโศก ศูนย์สอบจะอยู่อาคารฝั่งตรงข้าม

                        </li>
                        <li>เรือ: สามารถลงได้ที่ท่าเรืออโศก จากนั้นนั่งรถวินมอเตอร์ไซค์ต่อเข้าไปได้
                        </li><li>รถส่วนตัว: ผู้ที่ขับรถยนต์ส่วนตัวสามารถขอประทับตราจอดรถฟรีภายในตึก BB ได้ แต่ทั้งนี้มีการจำกัดเวลา กรณีเกินเวลาที่กำหนดจะต้องจ่ายค่าจอดรถเพิ่ม</li>
                    </ul>
                    <p><span className="font-semibold ">ศูนย์สอบเชียงใหม่: </span> อาคารนวรัฐ เลขที่ 4/6 ชั้น 3 ถนนแก้วนวรัฐ ซอย 3 ตำบลวัดเกต อำเภอเมือง จังหวัดเชียงใหม่ 50000</p>
                    <ul className="list-disc list-outside ml-5  mb-4">
                        <li >
                        รถส่วนตัว
                        </li>
                    </ul>
                    <p><span className="font-semibold ">ศูนย์สอบชลบุรี: </span> ห้อง Pacific โรงแรม The Tide Resort Bangsaen เลขที่ 44/1 ถนนบางแสน ซอย 1 แสนสุข อำเถอบางแสน จังหวัดชลบุรี 20130</p>
                    <ul className="list-disc list-outside ml-5  mb-4">
                        <li >
                        รถส่วนตัว
                        </li>
                    </ul>
                    <p><span className="font-semibold ">ศูนย์สอบชลบุรี: </span> ห้อง Grand Ballroom โรงแรม Holiday Inn Hotel & Suites Rayong City Centre เลขที่ 554/5 ถนนสุขุมมวิท อำเภอเมือง จังหวัดระยอง 21000</p>
                    <ul className="list-disc list-outside ml-5  mb-4">
                        <li >
                        รถส่วนตัว
                        </li>
                    </ul>
                    <p className="text-right mt-4">ข้อมูลจาก https://cpathailand.co.th</p>




                </div>

            </div></section>
    )
}
export default ToeicDirection