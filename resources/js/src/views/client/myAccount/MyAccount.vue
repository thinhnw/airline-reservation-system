<template>
  <b-container>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Đặt chỗ của tôi !" active>
          <b-card-text >
            <b-card bg-variant="dark" text-variant="white" title="vé máy bay khứ hồi">
              <b-card-text>
                Bay từ thiên đường xuống địa ngục
              </b-card-text>
              <b-button href="#" variant="warning">Chi tiết vé</b-button>
            </b-card>
          </b-card-text>
<!--          else-->
          <div>
            <b-card no-body class="overflow-hidden p-4 ">
              <b-row no-gutters class="align-items-center">
                <i class="far fa-exclamation-triangle"></i>
                <b-col>
                  <b-card-body title="Không tìm thấy đặt chỗ">
                    <b-card-text>
                      Mọi chỗ bạn đặt sẽ được hiển thị tại đây. Hiện bạn chưa có bất kỳ đặt chỗ nào, hãy đặt trên trang chủ ngay!
                    </b-card-text>
                    <b-link href="#" disabled>Đặt vé ngay !</b-link>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

        </b-tab>
        <b-tab title="Hồ Sơ">
          <b-card bg-variant="dark card-infor-user">
            <b-card-text class="d-flex align-items-center justify-content-between align-items-center">
              <div>
                <i class="far fa-user"></i>
                <span class="m-0">
                  Bùi Sơn
                </span>
              </div>
              <b-button href="#" variant="warning">
                <i class="black-icoin far fa-user-edit"></i>
                Cập nhật hồ sơ !
              </b-button>
            </b-card-text>
          </b-card>
          <b-card bg-variant="dark card-infor-user mt-1">
            <b-card-text class="d-flex align-items-center justify-content-between align-items-center">
              <div>
                <i class="far fa-map-marker-alt"></i>
                <span class="m-0">
                  Địa chỉ :
                  Số 8 tôn thất thuyết
                </span>
              </div>
            </b-card-text>
          </b-card>
          <b-card bg-variant="dark card-infor-user mt-1">
            <b-card-text class="d-flex align-items-center justify-content-between align-items-center">
              <div>
                <i class="far fa-mobile-alt"></i>
                <span class="m-0">
                  Số điện thoại :
                  0335950503
                </span>
                  <small>
                    <p class="mt-2">Số di động để nhận tin báo liên quan đến tài khoản.</p>
                  </small>
              </div>
            </b-card-text>
          </b-card>
          <b-card bg-variant="dark card-infor-user mt-1">
            <b-card-text class="d-flex align-items-center justify-content-between align-items-center">
              <div>
                <i class="far fa-envelope-open-text"></i>
                <span class="m-0">
                  Email :
                  knightstork.work@gmail.com
                </span>
                  <small>
                    <p class="mt-2">Địa chỉ email để nhận tin báo liên quan đến tài khoản.</p>
                </small>
              </div>
            </b-card-text>
          </b-card>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
export default {
name: "MyAccount"
}
</script>

<style lang="scss" scoped>
  .fa-exclamation-triangle{
    font-size: 56px;
    color: #ffc107;
  }
  .card-infor-user{
    span,p{
      color: #ffffff;
      margin-bottom: 0;
    }
    i{
      color: #ffc107;
      margin-right: 6px;
    }
    .black-icoin{
      color: #000000;
    }
  }
</style>