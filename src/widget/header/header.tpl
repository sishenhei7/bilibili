<div class="nav-menu">
  <div class="bili-wrapper clearfix">
    <div class="nav-con fl">
      <% if (data.navCon) { %>
        <ul>
          <% data.navCon.forEach(function(item){ %>
            <li class="<%= item.class %>">
              <a href="<%= item.href %>" title="<%= item.title %>" class="t">
                <% if (item.i) { %>
                <i class="<%= item.i %>"></i>
                <% } %>
                <%= item.name %>
              </a>
              <% if (item.div) { %>
              <div class="i-frame" style="width: 680px; height: 260px; display: none"></div>
              <% } %>
            </li>
          <% }) %>
        </ul>
      <% } %>
    </div>
    <div class="up-load fr">
      <a href="#" target="_blank" class="u-link">投稿</a>
      <ul class="up-nav" style="display: none;"></ul>
        <li>
          <a href="#" target="_blank">
            <i class="bili-icon rect i-art"></i>
            <span>专栏投稿</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="bili-icon rect i-ap"></i>
            <span>音屏投稿</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="bili-icon rect i-vp"></i>
            <span>视频投稿</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="bili-icon rect i-vm"></i>
            <span>投稿管理</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="bili-icon rect i-vc"></i>
            <span>创作中心</span>
          </a>
        </li>
    </div>
    <div class="nav-con fr"></div>
  </div>
</div>
<div class="banner_link">
  <div class="head-content bili-wrapper">
    <div class="search">
      <form class="searchform">
        <input type="text" autocomplete="off" placeholder="住嘴吧，皮这一下很开心喽？" class="search-keyword">
        <button class="search-submit"></button>
      </form>
      <a href="#" class="link-ranking">排行榜</a>
    </div>
    <a href="#" class="head-logo"></a>
  </div>
</div>
<nav class="bili-wrapper" scrollshow="true">
  <div class="primary-menu">
  <ul class="nav-menu">
    <li class="home">
      <a href="#">
        <div class="nav-name">首页</div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>999+</span>
          <div class="nav-name">动画</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>130</span>
          <div class="nav-name">番剧</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>131</span>
          <div class="nav-name">国创</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>999+</span>
          <div class="nav-name">音乐</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>284</span>
          <div class="nav-name">舞蹈</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>999+</span>
          <div class="nav-name">游戏</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>999+</span>
          <div class="nav-name">科技</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>999+</span>
          <div class="nav-name">科技</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>999+</span>
          <div class="nav-name">生活</div>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="num-wrap">
          <span>118</span>
          <div class="nav-name">鬼畜</div>
        </div>
      </a>
    </li>
  </ul>
  </div>
  <div class="nav-gif">
    <a href="#" target="#" title="坏笑" class="random-p"></a>
  </div>
</nav>
