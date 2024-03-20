const ToeicProve = () => {
    return (
        <section><h3 className="mb-4 text-primary">
            หลักฐานที่ต้องแสดงในวันสอบ
        </h3>
            <div className="h-[500px] overflow-y-auto">
                <div className="mb-8">

                    <p className="text-justify mb-4">
                        หลักฐานแสดงตนทุกประเภทที่ผู้สอบนำมาแสดง ทุกฉบับต้องเป็นฉบับจริง อยู่ในสภาพสมบูรณ์ ข้อมูลและรูปถ่ายเป็นปัจจุบัน ชัดเจนไม่เลือนราง และไม่หมดอายุ โดยผู้สอบจะต้องใช้ข้อมูล เช่น ชื่อ-นามสกุล (ภาษาอังกฤษ) วัน-เดือน-ปีเกิด เพศ ให้ตรงตามหลักฐานแสดงตน ในการสอบครั้งนั้น
                    </p>

                    <p className="font-semibold mb-2">สำหรับผู้ที่ถือสัญชาติไทย
                    </p>
                    <ol className="list-decimal list-outside ml-5 font-semibold">
                        <li className="">
                            กรณีสอบในนามบุคคลทั่วไป
                            <ul>
                                <li className="font-normal list-disc list-inside">บัตรประจำตัวประชาชนไทย หรือ ใบขับขี่สมาร์ตการ์ดไทย (บัตรแข็ง) หรือ หนังสือเดินทางไทย (Passport)
                                </li>
                            </ul>
                        </li>
                        <li>กรณีสอบในนามองค์กร และสถาบันการศึกษา ที่ลงนาม LOA กับ CPA (Thailand)
                            <ol className="list-decimal list-outside ml-5 font-normal">
                                <li>บัตรประจำตัวประชาชนไทย หรือ ใบขับขี่สมาร์ตการ์ดไทย (บัตรแข็ง) หรือ หนังสือเดินทางไทย (Passport) และ</li>
                                <li>บัตรประจำตัวพนักงานขององค์กรที่ใช้สิทธิ์สอบแบบมีรูปถ่าย หรือ บัตรประจำตัวนักศึกษาแบบมีรูปถ่าย</li>
                            </ol>
                        </li>
                    </ol>
                    <p className="font-semibold mt-8 mb-2">กรณีต้องการสอบครั้งถัดไป
                    </p>
                    <p>ผู้สอบสามารถจองสอบครั้งถัดไปได้หลังจากที่ผลคะแนนสอบครั้งหลังสุดออกแล้ว โดยต้องมี<span className="font-semibold">ระยะเว้นการสอบ 3 วันปฏิทิน</span> หลังจากวันสอบ
                        หมายเหตุ : กรณีที่มีการสอบซ้ำภายใน “ระยะเว้นการสอบ” ครั้งที่สอบซ้ำจะถือเป็นโมฆะ โดยไม่มีการคืนค่าสอบ</p>

                    <p className="text-right mt-4">ข้อมูลจาก https://cpathailand.co.th</p>




                </div>

            </div></section>
    )
}
export default ToeicProve