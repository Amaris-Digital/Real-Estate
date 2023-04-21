require "test_helper"

class PropertyControllerTest < ActionDispatch::IntegrationTest
  test "should get property_type" do
    get property_property_type_url
    assert_response :success
  end

  test "should get address" do
    get property_address_url
    assert_response :success
  end

  test "should get description" do
    get property_description_url
    assert_response :success
  end

  test "should get price" do
    get property_price_url
    assert_response :success
  end

  test "should get image" do
    get property_image_url
    assert_response :success
  end
end
