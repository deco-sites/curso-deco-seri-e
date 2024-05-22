
export interface Props {
  coupon?: string;
  couponDescription?: string;
}

export default function CouponTaskOne({
  coupon = "Cupom",
  couponDescription =
    "Benefícios do cupom",
 
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <p class="text-4xl leading-snug">
        Cupom: {coupon}
      </p>
        <p class="leading-normal">
            Benefícios do Cupom: {couponDescription}
        </p>
    </div>
  );
}
