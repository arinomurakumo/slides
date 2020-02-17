<?php if(!empty($items)):?>
  <?php foreach ($items as $key => $value):?>
    <ul>
      <li>
        <?php if($value['text']) :?>
          <?php echo $value['text'] ?>
        <?php endif; ?>
      </li>
    </ul>
  <?php endforeach; ?>
<?php else: ?>
  <p>No items found.</p>
<?php endif; ?>